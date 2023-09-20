type DebouncedFunction<F extends (...args: any[]) => any> = {
  (...args: Parameters<F>): void;
  cancel: () => void;
};

export function debounce<F extends (...args: any[]) => any>(
  func: F,
  threshold: number,
  execAsap = false
): DebouncedFunction<F> {
  let timeout: NodeJS.Timeout | null;

  const debounced: DebouncedFunction<F> = function(...args: Parameters<F>) {
    const self = this;

    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(self, args);
    }

    timeout = setTimeout(delayed, threshold || 100);

    function delayed() {
      if (!execAsap) {
        func.apply(self, args);
      }
      timeout = null;
    }
  };

  debounced.cancel = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

