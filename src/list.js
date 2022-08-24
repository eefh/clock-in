const root = ReactDOM.createRoot(document.getElementById('list-wrap'));
class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      tasks: [],
      selected: {}
    }
  }

  handleChange(event){
    this.setState({
      name: event.target.value,
      tasks: this.state.tasks
    })
  }
  handleUpdate(){
    if (this.state.name != '') {this.setState({
      name: '',
      tasks: [...this.state.tasks, this.state.name]
    })}
  }

  render() {
    return (
      <div>
        <div className="user-input">
          <button className="add" onClick={this.handleUpdate.bind(this)}>+</button>
          <div className="list">
            <input id="userText"type="text" placeholder="Enter Task" onChange={this.handleChange.bind(this)} value={this.state.input}/>
          </div>
        </div>
        <ul>
          {this.state.tasks.map((x, i) =>{
            return <li key={i}>{x}</li>
          })}
        </ul>
      </div>
    );
  };
}

root.render(<List/>);