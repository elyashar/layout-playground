# layout-playground

In this repo im gonna be experimenting with flexbox.

![layout example](./images/example.jpg)

## Observations

1. First of all using flex we always have:

- a flex container
- one or several flex items (the items are obviosly children of the container)

2. When the flex direction is row (the default) the flex items stretch verticly taking the full height of the container (see stretch div page). Thats because by default:

```css
align-items: stretch;
```

3.

The flex property (for flex items) is a shorthand for the default values for:

flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;

And flex: 1; is a shorthand for:
flex-grow : 1; ➜ The div will grow in same proportion as the window-size  
flex-shrink : 1; ➜ The div will shrink in same proportion as the window-size
flex-basis : 0; ➜ The div does not have a starting value as such and will
take up screen as per the screen size available for
e.g:- if 3 divs are in the wrapper then each div will take 33%.
