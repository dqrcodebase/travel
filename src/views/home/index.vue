<template>
    <div class="home">
        <home-header />
        <home-main />
    </div>
</template>
<script>
import { mustTry, adexchange } from '@/api';
import homeHeader from '@/layout/homeHeader';
import homeMain from './main';

export default {
    data() {
        return {
            state2: ''
        };
    },
    components: {
        homeHeader,
        homeMain
    },
    created() {
        mustTry();
        adexchange();
    },
    methods: {
        querySearch(queryString, cb) {
            queryString = queryString.trim();
            if (queryString) {
                search({ keyword: queryString }).then(rep => {
                    let { data: searchData } = rep;
                    cb(searchData);
                });
            } else {
                cb([]);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.el-autocomplete {
    width: 300px;
}
.el-autocomplete-suggestion__list {
    .word {
        color: #000000;
    }
    .districtName {
        color: #999999;
        margin-left: 5px;
    }
}
</style>
