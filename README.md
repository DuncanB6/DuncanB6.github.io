# Billboard Project

This project is a website for myself (Duncan Boyd) to showcase myself and some of my projects.

## Resources

- To learn HTML, CSS, and JS, I've been following [this tutorial](https://www.youtube.com/watch?v=yZnmEwzHfZw).

- Some icons used in my first version of the website are pulled from [Font Awesome](fontawesome.com).

- [This website](https://undraw.co) is a great resource for some themed images.

- [Colour palette](https://colorhunt.co/palette/f4f9f9ccf2f4a4ebf3aaaaaa)

- Font: FreeMono, monospace

- Convert images to lower res: 
for file in *.*; do
  convert "$file" -resize 1024x768 -units PixelsPerInch -density 72 "${file%.*}.jpg"
done

## Variable Naming

### CSS

- All variables: --variable-name

### HTML

- Class names: variable-name
- IDs: variable-name

### JS

- All variables: variableName

## To Do

- Reduce image resolution for better performance
- All buttons have same styling?
- Add 3D printing image to about page carousel
- Make sure carousel code is generic and reusable



