
class InputManager 
{
    constructor() 
    {

    }

//now the user can add any custom funtion to any key
    AddToKeyDown(key, callback) 
    {
        this.keyDownMap.set(key, callback)
    }

    AddToKeyReleased(key, callback) 
    {
        this.keyUpMap.set(key, callback)
    }
//helper function for objects
    AddFunctionalityToKeyFromObject(key, object, callBackOne, callBackTwo)
    {
        //bind is needed otherwise, errors
        this.AddToKeyDown(key, callBackOne.bind(object));
        this.AddToKeyReleased(key, callBackTwo.bind(object));
    }

    OnInput(key) 
    {
        if(typeof this.keyDownMap.get(key) == 'function')
        {
            return this.keyDownMap.get(key);
        }
    }

    OnRelease(key) 
    {
        if(typeof this.keyUpMap.get(key) == 'function')
        {
            return this.keyUpMap.get(key);
        }
    }

    keyDownMap = new Map();
    keyUpMap = new Map();
}

inputManager = new InputManager();

function keyPressed() 
{

    UserInput(inputManager.OnInput(key));
}

function keyReleased() 
{
    UserInput(inputManager.OnRelease(key));
}