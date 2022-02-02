from models import User, Post, Tag, PostTag, db
from app import app


db.drop_all()
db.create_all()


User.query.delete()
Post.query.delete()
PostTag.query.delete()
Tag.query.delete()


todd = User(first_name='Todd', last_name='Jones')
mark = User(first_name='Mark', last_name='Sloan')
derek = User(first_name='Derek', last_name='Shepherd')
lexi = User(first_name='Lexi', last_name='Grey')
christina = User(first_name='Christina', last_name='Yang')

p1 = Post(title="HI", content='This is a post', user_id=1)
p2 = Post(title="Hello", content='This is a post', user_id=2)
p3 = Post(title="Hola", content='This is a post', user_id=3)
p4 = Post(title="Howdy", content='This is a post', user_id=4)
p5 = Post(title="Holler", content='This is a post', user_id=5)




db.session.add_all([todd, mark, derek, lexi, christina, p1, p2, p3, p4, p5])
db.session.commit()

t1 = Tag(name='Happy', details=[PostTag(post_id=p1.id)])
t2 = Tag(name='Sad', details=[PostTag(post_id=p2.id)])

db.session.add_all([t1, t2])
db.session.commit()