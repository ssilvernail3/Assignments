from unittest import TestCase

from app import app
from models import db, User

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_user_test_db'
app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class UserViewsTestCase(TestCase):
    """Tests for views for User."""

    def setUp(self):
        """Add sample user."""

        User.query.delete()

        user = User(first_name="Test", last_name='User', image_url='https://media.istockphoto.com/photos/black-tri-mini-australian-shepherd-picture-id1362502462?b=1&k=20&m=1362502462&s=170667a&w=0&h=TM7dYeczpr_ccCykkwY8WKMsKGXg4iYXinwNkr2VFW0=')
        db.session.add(user)
        db.session.commit()

        self.user_id = user.id

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_list_user(self):
        with app.test_client() as client:
            resp = client.get("/")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Test', html)

    def test_show_user(self):
        with app.test_client() as client:
            resp = client.get(f"/{self.user_id}")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Test</h1>', html)

    def test_add_pet(self):
        with app.test_client() as client:
            d = {"first_name": "Test", "last_name": "Pet2", "image_url": "https://media.istockphoto.com/photos/black-tri-mini-australian-shepherd-picture-id1362502498?b=1&k=20&m=1362502498&s=170667a&w=0&h=6ahtYYDM0bb3GXn_9TqH0iR31MfQhq_TfQj-oDOQuh4="}
            resp = client.post("/", data=d, follow_redirects=True)
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn("<h1>Test</h1>", html)
