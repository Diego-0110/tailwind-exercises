import { twMerge } from 'tailwind-merge'

export default function Button ({ btnStyle = '', children, ...props }) {
  const styles = buttonStyles[btnStyle] || buttonStyles.default
  return (
    <button className={twMerge(styles, 'px-4 py-2 text-base font-semibold rounded-md')}
      type="button" {...props}>
      {children}
    </button>
  )
}

const buttonTypeStyles = {
  solid: 'text-white',
  outline: 'outline -outline-offset-2 hover:text-white'
}

const buttonStyles = {
  primary: twMerge(buttonTypeStyles.solid, 'bg-sky-400 hover:bg-sky-500'),
  danger: twMerge(buttonTypeStyles.solid, 'bg-rose-500 hover:bg-rose-600'),
  default: twMerge(buttonTypeStyles.solid, 'bg-slate-400 hover:bg-slate-500'),
  primaryOutline: twMerge(buttonTypeStyles.outline, 'outline-sky-400 text-sky-400 hover:bg-sky-400'),
  dangerOutline: twMerge(buttonTypeStyles.outline, 'outline-rose-500 text-rose-500 hover:bg-rose-500'),
  outline: twMerge(buttonTypeStyles.outline, 'outline-slate-400 text-slate-400 hover:bg-slate-400')
}
