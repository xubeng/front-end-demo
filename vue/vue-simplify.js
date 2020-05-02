 class SimpleVue{
    constructor(options){
        this.$options = options
        this.$data = options.data
        this.observer(this.$data)
    }

    observer(data){
        if(!data || typeof data !=="object"){
            return;
        }
        Object.keys(data).forEach(key=>{
            this.defineReactive(data,key,data[key])
            this.proxyData(key)
        })
    }
    proxyData(key){
        Object.defineProperty(this,key,{
            get(){
                console.log("代理-获取数据"+key)
                return this.$data[key]
            },
            set(newVal){
                console.log("代理-修改数据"+key)

                this.$data[key] = newVal    
            }
        })
    }

    defineReactive(data,key,val){
            Object.defineProperty(data,key,{
                get(){
                    console.log("获取数据"+key)
                    return val
                },
                set(newVal){
                    console.log("修改数据"+key)

                    val = newVal    
                }
            })
    }
}

