from flask import render_template
from src import app

@app.route('/')
def home():
    cards = [
        {"title": "SkyDive", "content": "13 Adventures", "image": "/static/images/beach-skuu.jpg"},
        {"title": "Mountain", "content": "128 Adventures", "image": "/static/images/beach-palms.jpg"},
        {"title": "Waterfall", "content": "43 Adventures", "image": "/static/images/beach-seats.jpg"},
        {"title": "Lake", "content": "62 Adventures", "image": "/static/images/beach-boy.jpg"}
    ]

    return render_template('index.html', title="Vacation Site", cards=cards)
