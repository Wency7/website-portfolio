function Tag({ title }: { title: string }) {
  return (
    <div className="text-xs font-medium text-white bg-[#BDA588ff] rounded-full px-2 py-1 mr-2">
      {title}
    </div>
  );
}

export default Tag;