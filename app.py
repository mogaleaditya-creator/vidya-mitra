from flask import Flask, render_template
app.run(host="0.0.0.0", port=10000)
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return "This is about page"

@app.route("/contact")
def contact():
    return "Contact page"

if __name__ == "__main__":
    app.run(debug=True)
