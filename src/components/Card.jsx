export const Card = ({ producto }) => {
    const { id, title, category, price, description, image, rating } = producto;
  
    return (
      <div className="flex flex-row flex-wrap mt-2 max-w-sm mx-auto border border-solid rounded-lg p-4 bg-gray-50 shadow-lg text-blue-700">
        <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
        <p className="text-sm font-medium mb-1">ID: <span className="font-normal">{id}</span></p>
        <p className="text-sm font-medium mb-1">Categoría: <span className="font-normal">{category}</span></p>
        <p className="text-sm font-medium mb-1">Precio: <span className="font-normal">${price}</span></p>
        <img src={image} alt={title} className="my-2 mx-auto h-40 object-contain" />
        <p className="text-sm font-medium mb-1">Descripción: <span className="font-normal">{description}</span></p>
        <p className="text-sm font-medium mb-1">Clasificación: <span className="font-normal">{rating?.rate} ({rating?.count} valoraciones)</span></p>
      </div>
    );
  };
  