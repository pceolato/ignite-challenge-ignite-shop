import { X } from "@phosphor-icons/react";
import { BagContent, DrawerClose, DrawerContent, ItemList } from "../../styles/drawer";
import { useDrawer } from "../../context/DrawerContext";
import { ProductCart } from "./ProductCart";

export function CartDrawer() {
    const { handleSetDrawer } = useDrawer()

    function setDrawerClose() {
        handleSetDrawer(false)
    }

    return (
        <DrawerContent>
            <DrawerClose onClick={setDrawerClose}>
                <X size={24} weight="bold" color="#8D8D99"/>
            </DrawerClose>
            <BagContent>
                <h3>Sacola de compras</h3>

                <ItemList>
                    <ProductCart />
                </ItemList>

                <div>

                </div>

                <button></button>
            </BagContent>
        </DrawerContent>
    )
}