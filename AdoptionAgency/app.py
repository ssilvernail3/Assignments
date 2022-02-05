from flask import Flask, request, render_template,  redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db,  connect_db, Pet
from forms import AddPetForm, EditPetForm


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "chickenzarecool21837"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home():
    '''Renders homepage for adoption agency'''
    pet = Pet.query.all()
    return render_template('home.html', pet=pet)

@app.route('/add', methods=['GET', 'POST'])
def add_pet_form():
    '''Renders add pet form (GET) or handles pet form submission (POST)'''

    form = AddPetForm()
    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data.upper()
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data

        pet = Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes)
        db.session.add(pet)
        db.session.commit()

        # flash(f'Added a new pet: {name} the {species}')
        return redirect('/')

    else:    
        return render_template('pet_form.html', form=form)


@app.route('/<int:pet_id>', methods=['GET', 'POST'])
def pet_page(pet_id):
    '''Displays page with pet information as well as form to edit pet'''

    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)

    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data
        db.session.commit()

        return redirect(f'/{pet_id}')

    else:
        return render_template('pet_info.html', pet=pet, form=form)



        # if form.validate_on_submit():
        # pet.photo_url = form.photo_url.data
        # pet.notes = form.notes.data
        # pet.available = form.available.data
        # db.session.commit()

        # return redirect(f'/{pet_id}')