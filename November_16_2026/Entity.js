
class Entity extends Drawable
{
    constructor(shape, pos, size)
    {
        
        super(shape, pos, size);
        this.direction = {x: 0, y: 0};
        this.speed = 0.5;
        this.lastPos = this.pos;
    }

    Update()
    {
        this.pos.x += this.direction.x * this.speed * deltaTime;
        this.pos.y += this.direction.y * this.speed * deltaTime;
    }

    CheckBounds(bounds)
    {
        if(bounds == false)
        {
            this.pos = {x: this.lastPos.x, y: this.lastPos.y};         
        }
        else 
        {
            this.lastPos = {x: this.pos.x, y: this.pos.y};
        }
    }

    Reset()
    {
        this.direction = {x: 0, y: 0};
    }

    MoveUp()
    {
        this.direction.y = -1;
    }

    MoveDown()
    {
        this.direction.y = 1;
    }

    MoveLeft()
    {
        this.direction.x = -1;
    }

    MoveRight()
    {
        this.direction.x = 1;
    }
}