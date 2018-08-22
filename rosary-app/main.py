import webapp2
import jinja2
import os
from google.appengine.api import users
from google.appengine.api import images
import os.path

jinja_current_directory = jinja2.Environment(
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions = ['jinja2.ext.autoescape'],
    autoescape = True)

class HomePage(webapp2.RequestHandler):
    def get(self):
        home_template = jinja_current_directory.get_template("templates/home.html")
        self.response.write(home_template.render())

app = webapp2.WSGIApplication([
    ('/', HomePage)
], debug=True)
