# What is this

A compound component, a component that uses other components and a data layer to function. All compound components are components but not all components are compound components.

Components within this file should be structure like so

/component
/data.ts
/component.ts
/index.ts
/styling.module.scss

The data.ts file returns a hook interface for any Component controller logic

The component file builds the actual component with the help of the styling.scss file

the index file uses the data.ts to collect needed data and pass it down to the component, it also exports the final component:

'''
const Profile = ({ ...props }) => {
const data = useProfileState(props);

return <Component {...props} {...data} />
}
'''
