
class Drawable
{
    constructor(shape, pos, size)
    {
        this.shape = shape;
        this.pos = pos;
        this.size = size;
        this.center = {x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2};         
    }
}

function UserInput(callback)
{//prevents error
    if(typeof callback == 'function')
    {
        callback();
    }
}

function InBounds(drawable, worldSize)
{
    if(drawable instanceof Drawable)
    {
        
        if(drawable.pos.x + drawable.size.x > worldSize.x - drawable.size.x)
        {
            return false;
        }
        if(drawable.pos.x < drawable.size.x)
        {
            return false;
        }
        if(drawable.pos.y < drawable.size.y)
        {
            return false;
        }
        if(drawable.pos.y + drawable.size.y >= worldSize.y - drawable.size.y)
        {
            return false;
        }
        return true;
    }
}

function I_Render(drawable)
{
    if(drawable instanceof Drawable)
    {
        if(drawable.shape == "BOX")
        {
            fill(100,0,0);
            rect(drawable.pos.x, drawable.pos.y, drawable.size.x, drawable.size.y);
        }
    }
}

function I_Update(thing, bounds)
{
    thing.CheckBounds(bounds);
    if(typeof thing.Update == 'function')
    {
        thing.Update();
    }
    
}