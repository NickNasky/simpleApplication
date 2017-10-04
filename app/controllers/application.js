import Ember from 'ember';

export default Ember.Controller.extend({
  name: JSON.parse(localStorage.getItem('key')),
  signupShow: false,
  confirmShow: false,
  actions: {
    toggleSignup() {
      this.toggleProperty('signupShow')
      this.set('confirmShow', false)
    },
    submitInfo() {
      this.toggleProperty('confirmShow')
      this.set('name', `${document.querySelector('#firstName').value} ${document.querySelector('#lastName').value}`)
      localStorage.setItem('key', JSON.stringify(`${document.querySelector('#firstName').value} ${document.querySelector('#lastName').value}`))
    }
  }
});
