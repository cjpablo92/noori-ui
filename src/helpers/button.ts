//import { useRouter } from 'next/router'

const linkFunction = (href, query, maskedHref) => {
    //const router = useRouter();
    return e => {
        e.preventDefault();
        // router.push({
        //     pathname: href,
        //     query: query
        // },
        // maskedHref || href);
    }
}

// TODO: Create a button on click type
const getClickBehaviour = (href: String, window: Window, type: String, onClick: Function) => {
    let onClickFunction = onClick;
    switch (type) {
    case 'link':
        // TODO: review this!!
        onClickFunction = linkFunction(href, {}, href);
        break;
    case 'section-link':
        onClickFunction = () => { 
            return window.location = window.location.origin + 
                window.location.pathname + href; 
        };
        break;
    case 'mail-to':
        onClickFunction = () => { window.open(`mailto:${href}`); };
        break;
    case 'external-link':
        break;
    default:
        // Do nothing cause we have the let onClickFunction = onClick; already in place
        break;
    }
    return 1;
}

export default getClickBehaviour;