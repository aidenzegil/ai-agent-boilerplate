# What is this?

We will define all of our global styling in this folder.

# How to use atoms and molecules

In the SCSS file:

```
@use "#assets/atoms/colors" as c;
@use "#assets/molecules/breakpoint.module" as breakpoint;
@use "#assets/molecules/text.module" as text;
```

```
.sampleClassname {
    @include breakpoint.display-from("s") {
        @inclued text.body-1()
        color: c.$pink
    }
}
```
