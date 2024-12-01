/* FIZ PELO TYPESCRIPT PLAYGROUND */


abstract class Inventory {
    protected items: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
        return this.items;
    }
}


class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}


class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const currentQuantity = this.items[item] || 0;
        this.items[item] = Math.min(currentQuantity + quantity, 10);
    }

    removeItem(item: string): void {
        delete this.items[item];
    }
}

const warehouse = new WarehouseInventory();
warehouse.addItem("Teclado", 50);
warehouse.addItem("Mouse", 20);
warehouse.removeItem("Teclado");
console.log("Armazém:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Cadeira", 6); 
store.removeItem("Cadeira");
console.log("Loja:", store.getInventory());
