<template>
    <div class="air-ticket">
        <div>
            <el-radio v-model="journey" label="oneWay">单程</el-radio>
            <el-radio v-model="journey" label="backTracking">返程</el-radio>
            <el-radio v-model="journey" label="capacity">智能搜索</el-radio>
            <el-radio v-model="journey" label="multipass">多程</el-radio>
        </div>
        <el-form ref="form" :model="form" class="journey-form">
            <el-form-item>
                <el-select v-model="form.depart" placeholder="请选择" style="margin-right:20px;margin-bottom:20px;">
                    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-option-group> </el-select
            ></el-form-item>
            <el-form-item>
                <el-date-picker v-model="form.departDate" type="date" placeholder="选择日期"> </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-select v-model="form.arrive" placeholder="请选择" style="margin-right:20px">
                    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
                        <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                    </el-option-group>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-date-picker :disabled="journey !== 'backTracking'" v-model="arriveDate" type="date" placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item class="num">
                <el-select v-model="form.adultNum" placeholder="请选择">
                    <el-option v-for="item in 10" :key="item.value" :label="item" :value="item"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { wwwInnerList } from '@/api';
export default {
    data() {
        return {
            journey: 'oneWay',
            options: [
                {
                    label: '热门城市',
                    options: [
                        {
                            value: 'Shanghai',
                            label: '上海'
                        },
                        {
                            value: 'Beijing',
                            label: '北京'
                        }
                    ]
                },
                {
                    label: '城市名',
                    options: [
                        {
                            value: 'Chengdu',
                            label: '成都'
                        },
                        {
                            value: 'Shenzhen',
                            label: '深圳'
                        },
                        {
                            value: 'Guangzhou',
                            label: '广州'
                        },
                        {
                            value: 'Dalian',
                            label: '大连'
                        }
                    ]
                }
            ],
            form: {
                adultNum: '',
                depart: '厦门',
                arrive: '',
                departDate: '',
                arriveDate: ''
            }
        };
    },
    created() {},
    methods: {
        onSubmit(value) {
            let obj = {
                'b[depCity]': '厦门',
                'b[arrCity]': '北京',
                'b[goDate]': '2020-06-05',
                'b[backDate]': '2020-06-12',
                ' b[underageOption]': '',
                'b[roundTripType]': 'back',
                'b[sortType]': 1,
                'b[foutFlightArrDate]': '2020-06-12',
                'b[foutFlightArrTime]': '00:55',
                'b[foutFlightNo]': 'JD5326|JD5870',
                'c[ke]': 13800138000,
                'c[cid]': 'qunar',
                'c[vid]': 93010001,
                'c[pid]': 10060,
                'c[uid]': 'c4cd034a-f716-4f65-8714-0e390089a73d',
                'c[t]': 'f_flight_rn_domestic_flightlist',
                'c[qcookie]': 'U.qayfldq5563',
                'c[vcookie]': '',
                'c[tcookie]': 26621696,
                'c[scookie]': 's_WIBTAXL5Z3DQOZC6LKILSJSF4U',
                'c[openId]': '',
                'c[unionId]': '',
                'c[un]': ' qayfldq5563'
            };
            wwwInnerList(obj);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/airTicket.scss';
</style>
