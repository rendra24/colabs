import prototype from 'prop-types'
import Link from 'next/link'

export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push('bg-primary-500')
    if(props.isLarge) className.push('text-2xl')
    if(props.isSmall) className.push('text-sm')
    if(props.isBlock) className.push('w-full')
    if(props.isDisabled) className.push('opacity-50')

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.isDisabled || props.isLoading){
        if(props.isDisabled ) className.push('disabled')
        return (
            <span className={className.join(' ')} style={props.style}>
                {
                    props.isLoading ? <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </> : (
                        props.children
                    )
                }
            </span>
        )
    }

    if(props.type === 'link'){
        if(props.isExternal){
            return(
                <a href={props.href} className={className.join(' ')} style={props.style} 
                target={props.target === '_blank' ? '_blank' : undefined}
                rel={props.target === '_blank' ? 'noopener noreferr' : undefined}>{props.children}</a>
            )
        }else{
            return(
            <a href={props.href} className={className.join(' ')} style={props.style} onClick={props.onClick}>
                {props.children}
            </a>
            )
        }
    }

    return (
        <button className={className.join(' ')} style={props.style} onClick={props.onClick}>
             {props.children}
        </button>
    )
}

Button.prototype = {
    type: prototype.oneOf(['button', 'link']),
    onClick: prototype.func,
    href: prototype.string,
    target: prototype.string,
    className: prototype.string,
    isDisabled: prototype.bool,
    isLoading: prototype.bool,
    isSmall: prototype.bool,
    isLarge: prototype.bool,
    isBlock: prototype.bool,
    isExternal: prototype.bool,
    hasShadow: prototype.bool,
}