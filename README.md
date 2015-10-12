# css_framework

## Contaner
.container -- div have width: 100%
```
<div class="container">Lorem ipsum</div>
```

.contaner.container--center -- div have width:
* screen width < 960px: 100%
* screen width [960px;1200px]: 960px
* screen width > 1200px: 1200px

Also div centered.
```
<div class="container container--center">Lorem ipsum</div>
```
## Colors
### List colors
- grey
- yellow
- red
- pink
- teal
- green
- orange
- deep_orange
- brown
- blue_grey
- brown
- brown
- purple
- cyan

Example: .background--grey_0, .background--grey_1 or .background--grey_2.

- 0 - darken then ETALON COLOR by 15%
- 1 - ETALON COLOR
- 2 - two lighten then ETALON COLOR by 10%
- 3 - three lighten then ETALON COLOR by 15%
- 4 - four lighten then ETALON COLOR by 20%
- 5 - five lighten then ETALON COLOR by 25%
```
<div class="background--teal_3">Lorem ipsum</div>
```
## Simple columns
- 12 columns.
- .b_column--size_#{n}

Example
```
<div class="b_column--size_1"></div>
<div class="b_column--size_2"></div>
<div class="b_column--size_3"></div>
<div class="b_column--size_6"></div>
```
