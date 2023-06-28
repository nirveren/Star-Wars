import { useLocation } from "react-router-dom"

export const useQuerryParams = () => {
    return new URLSearchParams(useLocation().search)
}