import { createSignal, For } from "solid-js";
import "./board-grid.css";

export default function Grid() {
  const [selected, setSelected] = createSignal<Set<string>>(new Set());

  const toggleCell = (row: number, col: number) => {
    const key = `${row}-${col}`;
    const newSet = new Set(selected());
    if (!newSet.has(key)) {
      newSet.add(key);
    }
    setSelected(newSet);
  };

  return (
    <div class="grid">
      <For each={Array.from({ length: 10 })}>
        {(_, rowIndex) => (
          <For each={Array.from({ length: 10 })}>
            {(_, colIndex) => {
              const key = `${rowIndex()}-${colIndex()}`;
              const isSelected = () => selected().has(key);
              return (
                <div
                  class={`cell ${isSelected() ? "selected" : ""}`}
                  onClick={() => toggleCell(rowIndex(), colIndex())}
                >
                </div>
              );
            }}
          </For>
        )}
      </For>
    </div>
  );
}
