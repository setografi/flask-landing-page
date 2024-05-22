from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    # Optionally pass data to the template
    title = "My Flask App"
    message = "Hello World!"
    
    return render_template('index.html', title=title, message=message)

if __name__ == '__main__':
    app.run(debug=True)
