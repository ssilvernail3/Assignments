from logging import debug
from flask import Flask, render_template, request, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import Question, satisfaction_survey as survey


app = Flask(__name__)
app.config['SECRET_KEY'] = 'shsboi33'
debug = DebugToolbarExtension(app)
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

RESPONSES = []


@app.route('/')
def start_survey():
    return render_template('home.html')


# @app.route('/questions/0')
# def first_question():
#     return render_template('question_one.html')


@app.route('/questions/<int:qid>')
def second_question(qid):
    responses = RESPONSES
    if (len(responses) != qid):
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]
    return render_template('question_two.html', question_num=qid, question=question)


@app.route('/answer', methods=['POST'])
def add_answer():
    answer = request.form['answer']
    RESPONSES.append(answer)
    responses = RESPONSES

    if (len(responses) == len(survey.questions)):
        # They've answered all the questions! Thank them.
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route('/complete')
def complete():
    return render_template('complete.html')
