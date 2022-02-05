"""Seed file to make sample data for db."""
from models import Pet, db
from app import app


# Create all tables
db.drop_all()
db.create_all()


Pet.query.delete()


p1 = Pet(name='Buster', species='Pug', photo_url='https://media.istockphoto.com/photos/little-pug-in-summer-park-picture-id186812586?b=1&k=20&m=186812586&s=170667a&w=0&h=Jj9FAcJ7ZO8yv9I9gAbbG4QdtW6oNfLgyrDs034cb8U=')


db.session.add(p1)
db.session.commit()

