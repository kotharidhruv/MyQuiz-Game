class Question {

  constructor() {
    this.title = createElement('h1')
    this.title2 = createElement('h1')
    this.input1 = createInput("name");
   //Create a input box to enter the number
    this.input2 = createInput('Correct Option No..')


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.message = createElement('h3')
    this.message1 = createElement('h4')
    this.message2 = createElement('h4')
    this.message3 = createElement('h4')
    this.message4 = createElement('h4')



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.message1.hide()
    this.message2.hide()
    this.message3.hide()
    this.message4.hide()



  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.title2.position(50,200)

    //Create html() and position() for each question, input and answers.
    this.input2.position(350,230)
    this.message.html("What color is the sky when it is sunny?")
    this.message.position(250,50)
    this.message1.html("1: Gray")
    this.message1.position(250,100)
    this.message2.html("2: Red")
    this.message2.position(250,120)
    this.message3.html("3: Blue")
    this.message3.position(250,140)
    this.message4.html("4: Black")
    this.message4.position(250,160)



    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.hide()
      this.title2.html("Thank You, Your Answer Has Been Submitted")
    })


  }
}
