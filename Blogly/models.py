import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(15), nullable=False)
    last_name = db.Column(db.String(25), nullable=False)
    image_url = db.Column(db.String(2000), nullable=True)

    posts = db.relationship('Post', backref='user')
    

    def __repr__(self):
        u = self
        return f"<User id={u.id} first name={u.first_name} last name={u.last_name} image={u.image_url}>"



class Post(db.Model):
    __tablename__ = 'posts'


    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.now)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    @property
    def friendly_date(self):
        """Return nicely-formatted date."""

        return self.created_at.strftime("%a %b %-d  %Y, %-I:%M %p")
    

    def __repr__(self):
        p = self
        return f"Post id={p.id} title={p.title} content={p.content} user id={p.user_id}>"