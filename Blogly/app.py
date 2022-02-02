from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, User, Post, Tag, PostTag

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///users_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = 'arlodex33!'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def list_users():
    """Shows list of all current users"""
    users = User.query.all()
    return render_template('home.html', users=users)


@app.route('/', methods=['POST'])
def create_user():
    first = request.form['first']
    last = request.form['last']
    image = request.form['image']

    new_user = User(first_name=first, last_name=last, image_url=image)
    db.session.add(new_user)
    db.session.commit()

    return redirect(f'/{new_user.id}')

#User Routes

@app.route('/<int:user_id>')
def show_user(user_id):
    """Shows information about a user"""
    user = User.query.get_or_404(user_id)
    posts = Post.query.all()
    return render_template('user.html', user=user, posts=posts)


@app.route('/<int:user_id>/edit')
def edit_user(user_id):
    """Edit User Information"""
    user = User.query.get_or_404(user_id)
    return render_template('edit.html', user=user)


@app.route('/<int:user_id>/edit', methods=['POST'])
def update_user(user_id):

    user = User.query.get_or_404(user_id)
    user.first_name = request.form['first']
    user.last_name = request.form['last']
    user.image_url = request.form['image']

    
    db.session.add(user)
    db.session.commit()

    return redirect(f'/{user.id}')

@app.route('/<int:user_id>/delete', methods=['POST'])
def delete_user(user_id):
    """Deletes Users"""
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()

    return redirect('/')

#Post Routes 


@app.route('/<int:user_id>/posts/new')
def new_post(user_id):
    "Takes user to form to create a new post"
    user = User.query.get_or_404(user_id)
    tag = Tag.query.all()
    return render_template('create_post.html', user=user, tag=tag)

@app.route('/<int:user_id>/posts/new', methods=['POST'])
def add_new_post(user_id):
    """Add new post for user"""
    user = User.query.get_or_404(user_id)
    title = request.form['title']
    content = request.form['content']

    tag_ids =  [int(num) for num in request.form.getlist('tags')]
    tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    new_post = Post(title=title, content=content, user_id=user.id, tags=tags)
    db.session.add(new_post)
    db.session.commit()

    return redirect(f'/{user.id}')


@app.route('/posts/<int:posts_id>')
def show_post(posts_id):
    """Show post from a user"""
    post = Post.query.get_or_404(posts_id)
    user = User.query.all()
    tag = Tag.query.all()
    return render_template('post.html', post=post, user=user, tag=tag)



@app.route('/posts/<int:posts_id>/edit')
def render_edit_post(posts_id):
    """Render edit form user's post"""
    post = Post.query.get_or_404(posts_id)
    tag = Tag.query.all()
   
    return render_template('edit_post.html', post=post, tag=tag)


@app.route('/posts/<int:posts_id>/edit', methods=['POST'])
def edit_post(posts_id):
    """Edit post made by user"""
    
    post = Post.query.get_or_404(posts_id)
    post.title = request.form['title']
    post.content = request.form['content']
    tag_ids =  [int(num) for num in request.form.getlist('tags')]
    post.tags = Tag.query.filter(Tag.id.in_(tag_ids)).all()

    db.session.add(post)
    db.session.commit()


    return redirect(f'/posts/{post.id}')

@app.route('/posts/<int:posts_id>/delete', methods=['POST'])
def delete_post(posts_id):
    """Deletes Posts"""
    post = Post.query.get_or_404(posts_id)
    db.session.delete(post)
    db.session.commit()

    return redirect(f'/{post.user_id}')

#Tag Routes

@app.route('/tags')
def show_tags():
    """Show list of all current tags"""
    tags = Tag.query.all()
    return render_template('tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def show_tag_details(tag_id):
    """Show information about a tag"""
    tag = Tag.query.get_or_404(tag_id)
    posts = Post.query.all()
    return render_template('tag_details.html', tag=tag, posts=posts)

@app.route('/tags/new')
def form_to_make_tag():
    """Shows form to make new tag"""
    tags = Tag.query.all()
    return render_template('create_tag.html', tags=tags)

@app.route('/tags/new', methods=['POST'])
def create_tag():
    """Creates new tag"""
    name = request.form['name']

    new_tag = Tag(name=name)
    db.session.add(new_tag)
    db.session.commit()

    return redirect(f'/tags/{new_tag.id}')

@app.route('/tags/<int:tag_id>/edit')
def show_tag_edit(tag_id):
    """Show tag edit form"""
    tag = Tag.query.get_or_404(tag_id)
    return render_template('tag_edit.html', tag=tag)

@app.route('/tags/<int:tag_id>/edit', methods=['POST'])
def submit_tag_edit(tag_id):
    """Update tag edit changes"""
    tag = Tag.query.get_or_404(tag_id)
    tag.name = request.form['name']

    db.session.add(tag)
    db.session.commit()

    return redirect(f'/tags/{tag.id}')

@app.route('/tags/<int:tag_id>/delete', methods=['POST'])
def delete_tag(tag_id):
    """Delete tag"""
    tag = Tag.query.get_or_404(tag_id)

    db.session.delete(tag)
    db.session.commit()

    return redirect('/tags')