function Tag({ title }: { title: string }) {
  return (
    <div className="flex items-center rounded-full bg-[#BDA588ff] px-3 py-1 text-xs font-medium leading-5 text-white mr-2 mb-2">
      {title}
    </div>
  );
}

export default Tag;