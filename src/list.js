const root = ReactDOM.createRoot(document.getElementById('content-container'));

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      tasks: [],
      selected: null,
      clock: false,
      clockText: 'Clocked Out!',
      date: new Date()

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
      tasks: [...this.state.tasks, {title: this.state.name, time: 0}]
    })}
  }

  clockChange(){
    this.setState({
      clock: !this.state.clock
    })
  }
  select(event){
    if (this.state.selected != event.target){
      this.setState({
        selected: event.target
      })
      event.target.className = 'selected'
    } else {
      this.setState({
        selected: null
      })
      event.target.className = '';
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()    
    });
    console.log(this.state.date);
  }
  render() {
 
    return (
      <div className="react-content">
        <div onClick={this.clockChange.bind(this)} className={this.state.clock === true && this.state.selected != null ? 'clockout' : 'clockin'}>
            <h1>{this.state.clock == true && this.state.selected != null ? 'Clocked In!' : 'Clocked Out!'}</h1>
        </div>
        <div className="list-container" id="list-wrap">
          <div className="user-input">
            <button className="add" onClick={this.handleUpdate.bind(this)}>+</button>
            <div className="list">
              <input id="userText"type="text" placeholder="Enter Task" onChange={this.handleChange.bind(this)} value={this.state.input}/>
            </div>
          </div>
          <ul>
            {this.state.tasks.map((x, i) =>{
              return <li onClick={this.select.bind(this)}key={i}>{x.title} {x.time != 0 ? <p>{x.time}</p> : ''}</li>
            })}
          </ul>
        </div>
      </div>
    );
  };
}

root.render(<List/>);