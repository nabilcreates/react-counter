// Create a component that extends from React.Component (it includes all you need for a component)

class App extends React.Component{

    constructor(){

        // Invoke super() to derive all methods and functions from React.Component to the new class (App)
        super();

        // this.state is derived from React.Component, this is where all your data go
        this.state = {
            count: 0
        }

        // Bind this whole context of this to this.changeCount so that changeCount can derive all methods in 'this' context
        this.changeCount = this.changeCount.bind(this)
        
        this.resetCount = this.resetCount.bind(this)
    }

    // Logic / Method
    changeCount(){

        // this.setState accepts a function where it passes and argument containing the PREVIOUS STATE, you can then manipulate the PREVIOUS STATE to set the new state.
        this.setState(function(prevState){
            return {
                count: prevState.count + 1
            }
        })
    }

    resetCount(){
        this.setState({
            count: 0
        })
    }

    // Render Method
    render(){

        // Return IN BRACKETS (CONVENTIONAL IN REACT APPS)
        return(
            // Javascript items are enclosed in {} (Same as Vue's {{}})
            <div>
                <h1 className='countheader' >{this.state.count}</h1>
                <button onClick={this.changeCount}>Click Me!</button>
                <button className='resetbutton' onClick={this.resetCount}>Reset!</button>
            </div>
        )
    }
    
}