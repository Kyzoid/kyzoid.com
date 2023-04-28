class AssetsLoader {
  public loadCSS(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
  
      link.onload = function() {
        resolve(true);
      }
  
      link.onerror = function() {
        reject();
      }
  
      document.head.appendChild(link);
    });
  }

  public waitMinimumTwoSeconds<T>(func: (args) => Promise<T>, ...args: any): Promise<T> {
    const waitPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    return Promise.all([func(args), waitPromise]).then(([result]) => {
      return result;
    });
  }
}

export default new AssetsLoader();