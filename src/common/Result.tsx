export default function Result({ title }: { title: string }) {
    return (
      <div className="bg-black bg-opacity-70 py-8 px-10 mt-16 flex">
        <div className="text-white w-full justify-center flex text-2xl">
          {title}
        </div>
      </div>
    );
  }
  