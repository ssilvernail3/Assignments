from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback
from forms import RegisterUserForm, UserForm, FeedbackForm
from sqlalchemy.exc import IntegrityError



app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///flask_feedback"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)

toolbar = DebugToolbarExtension(app)


@app.route('/')
def redirect_register():
    '''GET request to redirect to register form'''
    return redirect('/register')


@app.route('/register', methods=['GET', 'POST'])
def register():
    '''GET request to render register form / POST request to register User'''
    form = RegisterUserForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data   
        email = form.email.data
        first_name = form.first_name.data
        last_name = form.last_name.data

        new_User = User.register(username, password, email, first_name, last_name)
        
        db.session.add(new_User)

        try: 
            db.session.commit()

        except IntegrityError:
            form.username.errors.append('Username is already taken, please try again!')
            return render_template('register.html', form=form)

        session['username'] = username
        flash('Congratulations! You have created a new account!', 'success')

        return redirect(f'/users/{username}')

    return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    '''GET request to render login form / POST request handle login form submission'''

    form = UserForm()

    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data

        user = User.authenticate(username, password)
    
        if user:
            flash(f'Welcome Back {user.username}', 'success')
            session['username'] = username
            return redirect(f'/users/{user.username}')

        else:
            form.username.errors = ['Invalid username / password']
    
    return render_template('login.html', form=form)

@app.route('/logout')
def logout():
    '''Logout User'''
    session.pop('username')
    flash('Goodbye! See you again soon!', 'warning')
    return redirect('/login')

@app.route('/users/<username>')
def secret(username):
    '''GET request shows User info / feedback'''
    user = User.query.get_or_404(username)

    if 'username' not in session:
        flash('Please Login First!', 'danger')
        return redirect('/login')

    



    return render_template('user.html', user=user)

@app.route('/users/<username>/delete', methods=['POST'])
def delete_user(username):
    '''POST request to delete a User'''

    if 'username' not in session: 
        flash('Please Login First!', 'danger')
        return redirect('/login')
       
    user = User.query.get_or_404(username)
    if user.username == session['username']:
        db.session.delete(user)
        db.session.commit()
        session.pop('username')
        flash('User Deleted!', 'warning')
        return redirect('/login')

    flash('Action Not Allowed', 'danger')
    return redirect('/')


@app.route('/users/<username>/feedback/add', methods=['GET', 'POST'])
def add_feedback(username):
    '''GET request to render add feedback form / POST request to handle feedback form submission'''

    if 'username' not in session:
        flash('Please Login first!', 'danger')
        return redirect('/login')

    user = User.query.get_or_404(username)
    form = FeedbackForm()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data    
        new_feedback = Feedback(title=title, content=content, username=session['username'])
        db.session.add(new_feedback)
        db.session.commit()
        flash('Created Feedback', 'primary')
        return redirect(f'/users/{username}')

    return render_template('add_feedback.html', user=user, form=form)

@app.route('/feedback/<int:id>/update', methods=['GET', 'POST'])
def update_feedback(id):
    '''GET request to dispaly feedback update form / POST request to handle feedback update form submission'''


    if 'username' not in session:
        flash('Please Login first!', 'danger')
        return redirect('/login')

    form = FeedbackForm()
    feedback = Feedback.query.get_or_404(id)

    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data
        db.session.add(feedback)
        db.session.commit()
        flash('Feedback has been updated!', 'success')
        return redirect(f'/users/{feedback.user.username}')



    return render_template('update_feedback.html', feedback=feedback, form=form)


@app.route('/feedback/<int:id>/delete', methods=['POST'])
def delete_feedback(id):
    '''POST request to delete a User's Feedback'''

    if 'username' not in session: 
        flash("Please login first", 'danger')
        return redirect('/login')

    feedback = Feedback.query.get_or_404(id)
    if feedback.user.username == session['username']:
        db.session.delete(feedback)
        db.session.commit()
        flash('Feedback has been deleted!', 'danger')
        return redirect(f'/users/{feedback.user.username}')
