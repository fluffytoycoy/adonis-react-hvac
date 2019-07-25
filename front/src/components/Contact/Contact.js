import React, {Component} from 'react';
import './Contact.scss';
import * as Yup from "yup";
import { FormContainer, Form, Field, Button } from "ui-form-field";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is requried"),
  email: Yup.string()
    .required("Email is required!")
    .email("Invalid Email!"),

});

class Contact extends Component{
  constructor(props){
    super(props);
      this.state = {

      }
  }
  componentWillMount(){
    window.scrollTo({ top: 0 });
  }

  renderForm = (props) => (
    <Form >
      <Field name="name" placeholder="Name"/>
      <Field name="email" placeholder="Your-Email@email.com"/>
      <Field name="phone" placeholder="(555)-555-5555"/>
      <Field name="city" placeholder="Davenport"/>
      <Field name="address" placeholder="123 Imawesome Street"/>
      <Field textarea height='300px'name="message" placeholder="Message"/>
      <Button type="submit"  />
    </Form>
  );



  render(){
    return (
      <div id="contact">
        <div className="container">
        <div>
          <div className="form-card">
              <h1>Contact Us</h1>
                <FormContainer
                  validationSchema={schema}
                  onSubmit={this.onSubmit}
                  render={this.renderForm}
                />
          </div>
          </div>
        </div>
     </div>
    );
  }

}

export default Contact;
