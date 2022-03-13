import {React,Component}from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={
      studentData:[]

    }
  }
  handleSubmit= (e) => {
    e.preventDefault();
    let studentData=this.state.studentData;
    let name=this.refs.name.value;
    let specification=this.refs.specification.value;
    let dob=this.refs.dob.value;
    let createddate=this.refs.createdate.value;
    let newStudent={
      "name":name,
      "specification":specification,
      "dob":dob,
      "createddate":createddate
    }
    studentData.push(newStudent);
    this.setState({
      studentData:studentData
    })
this.refs.myForm.reset();
    }
  render(){
    let studentData=this.state.studentData;
    return(
      <div>
      <form ref="myForm">
      <label>Name</label>
      <input type="text" ref="name" placeholder="Enter name"/>
      <label>Specification</label>
      <input type="text" ref="specification" placeholder="Enter specification"/>
      <label>Dob</label>
      <input type="text" ref="dob" placeholder="Enter date of birth"/>
      <label> Createddate</label>
      <input type="text" ref="createdate" placeholder="Enter created date"/>
      <button onClick={e => this.handleSubmit(e)}>save</button>

      </form>
      <table>
        <tr>
          <th>Name</th>
            <th>Specification</th>
          <th>Dob</th>
<th>Createddate</th>
</tr>
{
  studentData.map((data,i)=>
  <tr key={i}>
    <td>{data.name}</td>
    <td>{data.specification}</td>
    <td>{data.dob}</td>
    <td>{data.createddate}</td>
  </tr>
  )
}
</table>
</div>
    )
  }
}
export default App;