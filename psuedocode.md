# INFO #

    -Mind reader should be able to switch pages byt manipulating state
    -Mind reader will guess users symbol based off of the number they're thinking of

## Assumed Functions ##

    -INIT()
    -NEXT PAGE()
    -PREVIOUS PAGE()
    -RANDOM SYMBOL()
    
## Button Actions ##

    -go button (call nextPage function)
    -next button (call nextPage function)
    -back button (call previousPage function)

## Pages ##

### Page 1 ##

    -Go button visible
    -I can read your mind text

### Page 2 ###

    -Next Button Visible
    -Back Button Visible
    -Pick a numeer text

### Page 3 ###

    -Next Button Visible
    -Back Button Visible
    -Add numbers text
    -ex: text

### Page 4 ###

    -Next Button Visible
    -Back Button Visible
    -Subtract number text
    -ex: text

### Page 5 ###

    -Next Button Visible (Reveal)
    -Back Button Visible
    -Symbol Text

### Page 6 ###

    -Back Button Visible
    -Symbol Text

## Functions ##

### For Changing State ###

    If (Next)
        + Page

    If (Back)
        - Page

### Page Operating ###

    If pageNum 4
        Randomize Array
    
    If pageNum 5
        display Symbol
    