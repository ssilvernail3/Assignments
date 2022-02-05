from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField
from wtforms.validators import InputRequired, Optional, AnyOf, URL, NumberRange



class AddPetForm(FlaskForm):
    '''Form for adding a pet'''

    name = StringField('Pet Name', validators=[InputRequired(message='Pet name cant be blank')])
    species = StringField('Species', validators=[InputRequired(message='Species cant be blank'), AnyOf(values=['dog', 'cat', 'porcupine', 'Dog', 'Cat', 'Porcupine'], message='Species must be a Cat, Dog or Porcupine!') ])
    photo_url = StringField('Photo URL', validators=[Optional(), URL(require_tld=False, message='Must be a valid URL')])
    age = IntegerField('Age', validators=[Optional(), NumberRange(min=0, max=30, message='Age must be between 0 - 30')])
    notes = StringField('Notes', validators=[Optional()])


class EditPetForm(FlaskForm):
    '''Form for editing a current pet'''

    photo_url = StringField('Photo URL', validators=[Optional(), URL(require_tld=False, message='Must be a valid URL')])
    notes = StringField('Notes', validators=[Optional()])
    available = BooleanField('Available')