export default function BoxContainer({
  children,
  width = '392px',
  height = '756px',
  bgColor = '#e0e0e0',
}) {
  return (
    <div
      className='flex justify-center items-end rounded-xl shadow-lg'
      style={{ width, height, backgroundColor: bgColor }}>
      {children}
    </div>
  )
}
