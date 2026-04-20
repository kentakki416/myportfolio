const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-px ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex size-full cursor-pointer items-center justify-center
        rounded-full bg-slate-950 px-3 py-1.5 md:px-5 md:py-2 text-purple backdrop-blur-3xl font-bold text-lg md:text-2xl lg:text-xl xl:text-2xl whitespace-nowrap"
        >
          {order}
        </span>
      </button>
    </div>
  )
}

export default AceternityIcon
