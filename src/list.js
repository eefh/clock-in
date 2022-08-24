const root = ReactDOM.createRoot(document.getElementById('content-container'));


const savedTasks = JSON.parse(localStorage.getItem('tasks'));

let tasks = savedTasks || [];
tasks.forEach(element => {
  element.selected = false;
})
class Task {
  constructor(name){
    this.name = name;
    this.selected = false;
    this.time = 0;
  }
}

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      selected: null,
      clock: false,
      clockText: 'Clocked Out!',
      date: new Date()
    }
  }

  handleChange(event){
    this.setState({
      name: event.target.value,
    })
  }
  handleUpdate(){
    if (this.state.name != '') {this.setState({
      name: '',
    })
    
    tasks = [...tasks, new Task(this.state.name)]}
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  clockChange(){
    if (this.state.selected != null){
    this.setState({
      clock: !this.state.clock
    })}
    
  }
  select(event){
    if (event.target.className == ''){
      event.target.className = 'selected'
    } else {
      event.target.className = '';
    }
    tasks.forEach(element => {
      element.name == event.target.childNodes[0].data && element.selected == false ? element.selected  = true : element.selected = false;
    });
    console.log(event.target.childNodes[0].data);
  }
  clear(){
    window.localStorage.clear();
    tasks = []
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
    tasks.forEach(element => {
      element.selected == true ? element.time += 1 : 0;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  render() {
 
    return (
      <div className="react-content">
        <div className="list-container" id="list-wrap">
          <div className="user-input">
            <button className="add" onClick={this.handleUpdate.bind(this)}>+</button>
            <div className="list">
              <input id="userText"type="text" placeholder="Enter Task" onChange={this.handleChange.bind(this)} value={this.state.input}/>
            </div>
            <button className="clear" onClick={this.clear.bind(this)}>Clear All</button>
          </div>
          <ul>
            {tasks.map((x, i) =>{
              return <li onClick={this.select.bind(this)}key={i}>{x.name}<p>{x.time}s</p></li>
            })}
          </ul>
        </div>
      </div>
    );
  };
}

root.render(<List/>);