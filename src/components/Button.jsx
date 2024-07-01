
const Button = ({children, ...props}) => {
	return <button className="bg-red-700 hover:bg-red-900 p-3 rounded-md text-white" {...props}>{children}</button>
}


export default Button ;