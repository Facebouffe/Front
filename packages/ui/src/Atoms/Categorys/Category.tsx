import * as React from "react";
import Styles from './Category.module.scss'
import  './Icons'


type CategorySize = 'small' | 'medium' | 'large';
type CategoryType =
    'Friterie'
    | 'Burger'
    | 'Pizza'
    | 'Asiatique'
    | 'Kebab'
    | ' Tacos'
    | 'Halal'
    | 'Vegan'
    | 'Indien'
    | 'Patisserie'

export interface CategoryProps
    extends React.ComponentPropsWithoutRef<'button'> {
    category?: CategoryType;
    size?: CategorySize;
}

// function MyIcon() {
//     const [imageUrl, setImageUrl] = useState('');
//
//     useEffect(() => {
//         fetch('Icons.json')
//             .then(response => response.json())
//             .then(data => {
//                 setImageUrl(data.imageUrl);
//             });
//     }, []);
//
//     return (
//         <button>
//             {imageUrl && <img src={imageUrl} alt="Icon"/>}
//         </button>
//     );
// }

// const Icon = ({data}: any) => {
//     return (
//         <svg width={data.width} height={data.height}>
//         </svg>
//     );
// };


export const Category = React.forwardRef<HTMLButtonElement, CategoryProps>(
    (
        {
            category = 'Halal',
            size = 'medium',
            className,
            ...props
        }, ref
    ) => {
        // const icon = icons+ {category}

        const categoryClasses = `${Styles.Category}
        ${Styles[`Category-${category}`]}
        ${Styles[`Category-${size}`]}
        `
        return (

            <button ref={ref}
                    className={categoryClasses} {...props}>{category}
                {/*<img src={icon}/>*/}
                {/*<svg ><use xlinkHref="./Icons/" +`${category}.svg`/> <svg/>*/}
                <svg > <use xlinkHref={"./Icons/" + `${category}.svg`} /></svg>
                {/*<img src={"C:\\Users\\El Hariri\\Documents\\CESI\\Front\\packages\\ui\\src\\Atoms\\Categorys\\Icons\\" + `${category}.svg`}/>*/}
            </button>


        )
    }
)