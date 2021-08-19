import React from 'react';
import './Contact.css';
import {Row,Col,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

class Contact extends React.Component{ 
  constructor(props){
      super(props);
      this.state={
            amount: '',
            startd: '',
            endd: '',
            interest: '',
            time: '',
            iamount: '',
            tamount: '',
            count: 0,
            Visits: 0,
      };
  }

  mySubmitHandler = (event) => {
    event.preventDefault()
    this.setState({iamount: this.state.iamount+1});
    var startdateMoment = moment(this.state.startd);
    var enddateMoment = moment(this.state.endd);
    if (startdateMoment.isValid() === true && enddateMoment.isValid() === true) {
          var years = enddateMoment.diff(startdateMoment, 'years');
          var months = enddateMoment.diff(startdateMoment, 'months') - (years * 12);
          startdateMoment.add(years, 'years').add(months, 'months');
          var days = enddateMoment.diff(startdateMoment, 'days')
          this.setState({time: years+'-'+months+'-'+days});
          months = years*12 + months;
          var Interest_amount = ((this.state.interest*months*this.state.amount/100)+(this.state.interest*days*this.state.amount/3000));
          this.setState({iamount: Interest_amount});
          this.setState({tamount: Interest_amount+this.state.amount/1});
        }
      else{
        console.log("undefined");
      }
    this.setState({
            amount: '',
            startd: '',
            endd: '',
            interest: ''
          });
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }



  render(){
  return (
    <div className="pt_65 bg_image">
        <Container className="Form mt-5 pt-4">
          <Row>
              <Col sm={12} md={6}>
                  <form onSubmit={this.mySubmitHandler}>
                     <label>Amount</label>
                     <input name="amount" type="number" value={this.state.amount} onChange={this.myChangeHandler} placeholder="Principal Amount" required/>
                     <label>Start Date</label>
                     <input name="startd" type="date" value={this.state.startd} onChange={this.myChangeHandler} required/>
                     <label>End Date</label>
                     <input name="endd" type="date" value={this.state.endd} onChange={this.myChangeHandler} required/>
                     <label>Interest</label>
                     <input name="interest" type="float" value={this.state.interest} onChange={this.myChangeHandler} placeholder="Rate of Interest" required/>
                     <input type="submit" className="submitButton" />
                   </form>
              </Col>
              <Col sm={12} md={6}>
                    <form>
                     <label>Time</label>
                     <input type="text" name="time" value={this.state.time} placeholder="Years-Months-Days" readOnly= {true}/>
                     <label>Interest Amount</label>
                     <input type="number" name="iamount" value={this.state.iamount} placeholder="Interest Amount" readOnly= {true}/>
                     <label>Total Amount</label>
                     <input type="text" name="tmount" value={this.state.tamount} placeholder="Total Amount" readOnly= {true}/>
                   </form>
              </Col>
          </Row>
        </Container>
    </div>
  );  
}
};

export default Contact;