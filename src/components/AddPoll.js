import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  };

  handleOnChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;

    return question === ''
      || a === ''
      || b === ''
      || c === ''
      || d === '';
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    this.props.dispatch(handleAddPoll(this.state));
  }

  render () {
    const { question, a, b, c, d } = this.state;

    return (
      <form className='add-form' onSubmit={this.handleSubmit}>
        <h3 style={{marginBottom: 5}}>What is your question?</h3>
        <input
          value={question}
          onChange={this.handleOnChange}
          name='question'
          className='input'
          type='text'
        />

        <h3>What are the options?</h3>

        <label className='label' htmlFor='a'>A.</label>
        <input
          id='a'
          name='a'
          className='input'
          value={a}
          onChange={this.handleOnChange}
          type='text'
        />

        <label className='label' htmlFor='b'>B.</label>
        <input
          id='b'
          name='b'
          className='input'
          value={b}
          onChange={this.handleOnChange}
          type='text'
        />

        <label className='label' htmlFor='c'>C.</label>
        <input
          id='c'
          name='c'
          className='input'
          value={c}
          onChange={this.handleOnChange}
          type='text'
        />

        <label className='label' htmlFor='d'>D.</label>
        <input
          id='d'
          name='d'
          className='input'
          value={d}
          onChange={this.handleOnChange}
          type='text'
        />

        <button
          className='btn'
          type='submit'
          disabled={this.isDisabled()}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default connect()(AddPoll);