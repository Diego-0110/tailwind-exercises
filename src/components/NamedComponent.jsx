export default function NamedComponent ({ name, children, ...props }) {
  return (
    <div className="flex flex-col items-center gap-1" {...props}>
      {children}
      <p className="font-bold text-sm text-gray-400">{name}</p>
    </div>
  )
}
