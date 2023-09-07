export default function BookPage({ params }: { params: { _id: string } }) {
  return (
    <div>
      BOOOOOKPAGE
      {params._id}
    </div>
  );
}
