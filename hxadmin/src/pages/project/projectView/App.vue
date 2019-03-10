<template>
  <div class="hx-pages hx-projectEdit" v-loading="loading">
    <el-row class="hx-projectEdit_header">
      <div class="hx-projectEdit_header-text">
        <span v-if="id === ''">添加比赛</span>
        <span v-else style="font-weight: bold;">比赛编码：{{contestNo}}</span>
      </div>
      <div class="hx-projectEdit_header-line"></div>
    </el-row>

    <el-form ref="infoForm" :rules="rules" :model="form" label-width="110px">

      <el-row class="hx-projectEdit_rows">
         <el-row class="hx-projectEdit_title hx-projectEdit_tab">
           <p class="hx-projectEdit_tab-row" @click="active = 'info'" :class="{'hx-projectEdit_tab-active' : active === 'info'}">基本信息</p>
           <p class="hx-projectEdit_tab-row" @click="active = 'list'" :class="{'hx-projectEdit_tab-active' : active === 'list'}">报名信息</p>
         </el-row>
         <div v-if="active === 'info'">
            <el-form-item label="项目名称" prop="name">
              <el-col :span="12">
                <el-input v-model="form.name" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="项目描述">
              <el-col :span="12">
                <el-input type="textarea" :rows="10" v-model="form.description" :disabled="true"></el-input>
              </el-col>
              <el-col  class="hx-projectEdit_qrcode" :span="12">
                <div class="hx-projectEdit_img">
                  <img :src="qrCode" alt="">
                </div>
                <div class="hx-projectEdit_img-button">
                  <el-button type="danger" ><a :href="qrCode" download="二维码">保存二维码</a></el-button>
                </div>
              </el-col>
            </el-form-item>
            <el-form-item label="报名人数上限" prop="peoples">
              <el-col :span="12">
                <el-input v-model="form.peoples" type="number" style="width:100px;"  :disabled="true"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="报名要求" prop="sign_up_required">
              <el-col :span="12">
                <el-input type="textarea" :rows="6" v-model="form.sign_up_required" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="评比规则" prop="score_rule">
              <el-col :span="12">
                <el-input type="textarea" :rows="8" v-model="form.score_rule" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="奖项设置" prop="prize_setting">
              <el-col :span="12">
                <el-input type="textarea" :rows="8" v-model="form.prize_setting" :disabled="true"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="比赛级别" prop="level">
              <el-select 
                v-model="form.level"
                :disabled="true"
                placeholder="请选择比赛级别">
                  <el-option
                    v-for="(value, key) in levelList"
                    :key="key"
                    :label="value"
                    :value="key">
                  </el-option>
                </el-select>
            </el-form-item>
          </div>
          <div v-if="active === 'list'">
              <div v-if="list === ''" style="text-align: center;">报名信息为空...</div>
              <div v-else>
                <div style="text-align: right;">
                  <el-button @click.stop="handleExport" style="margin-bottom: 30px;" type="primary" size="small">导出Excel</el-button>
                </div>
                
               <el-table
                  class="hx-projectEdit_table"
                  border
                  v-for="(value, key) in list"
                  :data="value"
                  @row-click="handleRow"
                  style="width: 100%">
                  <el-table-column
                    prop="team_name"
                    label="团队名称"
                    width="180">
                  </el-table-column>
                  <el-table-column
                    prop="team_no"
                    label="团队编号"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    label="角色"
                    width="100">
                    <template slot-scope="scope">
                      <span v-if="scope.row.role_type === '2'">队长</span>
                      <span v-else>队员</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                  </el-table-column>
                  <el-table-column
                    width="100"
                    label="性别">
                    <template slot-scope="scope">
                      <span v-if="scope.row.sex === '1'">男</span>
                      <span v-else-if="scope.row.sex === '2'">女</span>
                      <span v-else>未填写</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="school_name"
                    label="学校">
                  </el-table-column>
                  <el-table-column
                    prop="phone"
                    label="电话"
                    width="150">
                  </el-table-column>
                  <el-table-column
                    label="状态"
                    width="80">
                    <template slot-scope="scope">
                      <span v-if="scope.row.status === '1'">未审核</span>
                      <span v-else-if="scope.row.status === '2'">已审核</span>
                      <span v-else>未填写</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="操作"
                    width="220">
                    <template slot-scope="scope">
                      <el-button v-if="scope.row.status === '1'" @click.stop="handleStatus(scope.row)"  type="primary" size="small">审核</el-button>
                      <el-button v-if="scope.row.status === '1'" @click.stop="handleEdit(scope.row)"  type="primary" size="small">修改</el-button>
                      <el-button v-if="scope.row.role_type === '1'" @click.stop="handleDelete(scope.row)"  type="danger" size="small">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
          </div>
      </el-row>

      <el-row class="hx-projectEdit_rows" v-if="active === 'info'">
         <el-row class="hx-projectEdit_title">关联方信息</el-row>

        <el-row v-for="(value, key) in form.school_info">
           <el-col :span="8">
              <el-form-item label="关联学校">
                <el-col>
                  <el-select 
                   :disabled="true"
                  v-model="value.name" 
                  placeholder="选择学校" 
                  >
                    <el-option
                      v-for="(value, key) in school"
                      :key="key"
                      :label="value"
                      :value="value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关联校区">
                <el-col>
                  <el-select v-model="value.zone" placeholder="关联校区"  :disabled="true">
                    <el-option
                      v-for="(value, key) in school_zone[handleKey(value.name)]"
                      :key="key"
                      :label="value"
                      :value="value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>

         </el-row>

         <el-form-item label="关联品牌"  prop="brand">
            <el-col :span="12">
              <el-input v-model="form.brand"  :disabled="true" style="width:195px;"></el-input>
            </el-col>
          </el-form-item>
      </el-row>

      <el-row class="hx-projectEdit_rows" v-if="active === 'info'">
        <el-row class="hx-projectEdit_title">标签信息</el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item class="hx-projectEdit_label" label="标签" prop="tag">
              <el-input v-model="form.tag"  :disabled="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-row>

      <el-row class="hx-projectEdit_rows" v-if="active === 'info'">
        <el-row class="hx-projectEdit_title" style="margin-bottom: 0;">流程信息</el-row>

        <el-row class="hx-projectEdit_content">

          <el-row class="hx-projectEdit_text">宣传报名期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="pr_start_time">
                <el-date-picker
                  v-model="form.pr_start_time"
                  type="datetime"
                   :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="pr_end_time" required>
                <el-date-picker
                  v-model="form.pr_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="社团参与数" prop="society_participants" required>
                <el-input v-model="form.society_participants" :disabled="true" type="number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="摆摊开始时间" prop="stall_start_time">
                <el-date-picker
                  v-model="form.stall_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊结束时间" prop="stall_end_time" required>
                <el-date-picker
                  v-model="form.stall_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="摆摊场地" prop="stall_site">
                <el-input :disabled="true" v-model="form.stall_site"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="扫楼开始时间" prop="check_building_start_time">
                <el-date-picker
                  v-model="form.check_building_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="扫楼结束时间" prop="check_building_end_time" required>
                <el-date-picker
                  v-model="form.check_building_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

        </el-row>

        <el-row class="hx-projectEdit_content">

          <el-row class="hx-projectEdit_text">培训动员期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间"  prop="tp_start_time">
                <el-date-picker
                  v-model="form.tp_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="tp_end_time" required>
                <el-date-picker
                  v-model="form.tp_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训场地" prop="training_site">
                <el-input v-model="form.training_site" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="参与培训人数" prop="tr_participants" required>
                <el-input v-model="form.tr_participants" type="number" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="培训讲师" prop="lector">
                <el-input v-model="form.lector" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.tp_is_exist_media" :disabled="true" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>

        </el-row>

        <el-row class="hx-projectEdit_content">
          <el-row class="hx-projectEdit_text">营销实战期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="start_time">
                <el-date-picker
                  v-model="form.start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="end_time">
                <el-date-picker
                  v-model="form.end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>

        <el-row class="hx-projectEdit_content">
          <el-row class="hx-projectEdit_text">决赛颁奖期</el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="开始时间" prop="fap_start_time">
                <el-date-picker
                  v-model="form.fap_start_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="开始时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="结束时间" prop="fap_end_time">
                <el-date-picker
                  v-model="form.fap_end_time"
                  type="datetime"
                  :disabled="true"
                  placeholder="结束时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛场地" prop="finals_site">
                <el-input v-model="form.finals_site" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="决赛团队数" prop="teams_num" required> 
                <el-input v-model="form.teams_num" type="number" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="决赛评委" prop="judge">
                <el-input v-model="form.judge" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="hx-projectEdit_checkbox">
              <el-form-item label="">
                <el-checkbox v-model="form.fap_is_exist_media" :disabled="true" true-label="1" false-label="2">是否有多媒体设备</el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-row>
      </el-row>

      <el-row class="hx-projectEdit_button">
        <a :href="links.index"><el-button>返回</el-button></a>
      </el-row>
    </el-form>


    <el-dialog
      title="学生信息"
      :before-close="handleClose"
      :visible.sync="dialogInfo"
      width="740px">
      <el-form ref="studentForm" :rules="studentRules" :model="studentForm" label-width="95px" style="display: inline-block;">
        <el-col class="hx-projectEdit_info" :span="12">团队编号：{{info.team_no}}</el-col>
        <el-col class="hx-projectEdit_info" :span="12">团队名称：{{info.team_name}}</el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="姓名：" prop="name">
              <el-col :span="12">
                <el-input v-model="studentForm.name"  placeholder="请填写姓名"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>姓名：{{info.name}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="性别：" prop="sex"  class="is-required">
              <el-col :span="12">
                <el-radio v-model="studentForm.sex" label="1">男</el-radio>
                <el-radio v-model="studentForm.sex" label="2">女</el-radio>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>性别：
            <span v-if="info.sex === '1'">男</span>
            <span v-else-if="info.sex === '2'">女</span>
            <span v-else>未填写</span>
           </el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          
          <el-row v-if="edit">
            <el-form-item label="手机号码：" prop="phone" class="is-required">
              <el-col :span="12">
                <el-input v-model="studentForm.phone" placeholder="请填写手机号码"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>手机号码：{{info.phone}}</el-row>

        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="邮箱：" prop="email" class="is-required">
              <el-col :span="12">
                <el-input v-model="studentForm.email"  placeholder="请填写邮箱"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>邮箱：{{info.email}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="身份证：" prop="identify_number" class="is-required">
              <el-col :span="12">
                <el-input v-model="studentForm.identify_number"  placeholder="请填写身份证"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>身份证：{{info.identify_number}}</el-row>
      </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="血型：" prop="blood_type">
              <el-col :span="12">
                <el-select v-model="studentForm.blood_type" placeholder="请选择血型">
                  <el-option value="A">A</el-option>
                  <el-option value="B">B</el-option>
                  <el-option value="AB">AB</el-option>
                  <el-option value="O">O</el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>血型：{{info.blood_type}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="学校：" prop="school_name">
              <el-col :span="12">
                <el-select v-model="studentForm.school_name" placeholder="请选择学校" @change="studentForm.school_zone = ''">
                  <el-option
                    v-for="(value, key) in school"
                    :key="key"
                    :label="value"
                    :value="value">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>学校：{{info.school_name}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="校区：" prop="school_zone">
              <el-col :span="12">
                <el-select v-model="studentForm.school_zone" placeholder="请选择校区">
                  <el-option
                    v-for="(value, key) in school_zone[handleKey(studentForm.school_name)]"
                    :key="key"
                    :label="value"
                    :value="value">
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>校区：{{info.school_zone}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="学院：" prop="college">
              <el-col :span="12">
                <el-input v-model="studentForm.college" placeholder="请填写学院"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>学院：{{info.college}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="专业：" prop="major">
              <el-col :span="12">
                <el-input v-model="studentForm.major" placeholder="请填写专业"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>专业：{{info.major}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="毕业学历：" prop="degree_type">
              <el-col :span="12">
                <el-select v-model="studentForm.degree_type" placeholder="请选择毕业学历">
                  <el-option value="1">专科</el-option>
                  <el-option value="2">全日制本科</el-option>
                  <el-option value="3">硕士</el-option>
                  <el-option value="4">博士</el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>毕业学历：<span v-if="info.degree_type === '1'">专科</span>
            <span v-if="info.degree_type === '2'">全日制本科</span>
            <span v-if="info.degree_type === '3'">硕士</span>
            <span v-if="info.degree_type === '4'">博士</span>
          </el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="入学时间：" prop="entrance_date">
              <el-col :span="12">
                <el-date-picker
                  v-model="studentForm.entrance_date"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="入学时间">
                </el-date-picker>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>入学时间：{{info.entrance_date}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">
          <el-row v-if="edit">
            <el-form-item label="籍贯：" prop="native_place">
              <el-col :span="12">
                <el-input v-model="studentForm.native_place"  placeholder="请填写籍贯"></el-input>
              </el-col>
            </el-form-item>
          </el-row>
          <el-row v-else>籍贯：{{info.native_place}}</el-row>
        </el-col>
        <el-col class="hx-projectEdit_info" :span="12">报名时间：{{info.createtime}}</el-col>
        <el-col class="hx-projectEdit_info" :span="24">状态：
          <span v-if="info.status === '1'">未审核</span>
          <span v-if="info.status === '2'">已审核</span>
        </el-col>

      </el-form>
       <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="handleTeam">团队变更</el-button>
          <el-button type="primary" v-if="info.status === '1' && !edit" @click="handleEdit(info)">修改</el-button>
          <el-button type="primary" v-if="info.status === '1' && edit" @click="handleSaveEdit('studentForm')">保存</el-button>
          <el-button type="primary" @click="dialogInfo = false, edit = false">返 回</el-button>
        </span>
    </el-dialog>
    <el-dialog
      title="团队变更"
      :visible.sync="dialogTeam"
      width="50%">
      <el-col class="hx-projectEdit_info" :span="24">团队编号：{{team.team_no}}</el-col>
      <el-col class="hx-projectEdit_info" :span="24">团队名称：<el-input v-model="team.team_name" style="width: 300px;" maxlength="20"></el-input></el-col>
      <el-col class="hx-projectEdit_info" :span="24"><span style="vertical-align: top;">队长变更：</span>
        <el-radio-group v-model="leader">
          <el-radio  class="hx-projectEdit_radio" v-for="(value, key) in team.team" :label="value.record_id">{{value.name}}</el-radio>
        </el-radio-group>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogTeam = false">返 回</el-button>
        <el-button type="primary" @click="handleSave">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import { getPojectView, postRecordDelete, postRecordCheck, getEnrollRecordTeam, postEnrollRecord, postEnrollRecordMember } from '@/service/project/http'
  import { formatUrlParams } from '@/utils/utils'
  export default {
    created () {
      let params = formatUrlParams(location.search)
      this.id = params.id ? params.id : ''
      this.loading = true
      if (this.id === '') {
        this.$message.error('找不到项目ID')
      } else {
        this.getData()
      }
    },
    methods: {
      handleTeam () {
        this.loading = true
        getEnrollRecordTeam({team_name: this.info.team_name, team_no: this.info.team_no}).then((res) => {
          this.loading = false
          this.team = res.data.list
          this.leader = ''
          for (let item in this.team.team) {
            if (this.team.team[item].role_type === '2') {
              this.leader = this.team.team[item].record_id
            }
          }
          this.dialogInfo = false
          this.dialogTeam = true
        }).catch(() => {
          this.loading = false
        })
      },
      handleSave () {
        if (this.team.team_name === '') {
          this.$message({
            message: '团队名称不能为空',
            type: 'warning'
          })
        } else {
          this.loading = true
          postEnrollRecord({
            team_name: this.team.team_name,
            team_no: this.team.team_no,
            record_id: this.leader
          }).then((res) => {
            this.dialogTeam = false
            this.getData()
          }).catch(() => {
            this.loading = false
          })
        }
      },
      handleEdit (row) {
        this.studentForm = {
          record_id: row.record_id,
          name: row.name,
          sex: row.sex,
          phone: row.phone,
          email: row.email,
          identify_number: row.identify_number,
          blood_type: row.blood_type,
          degree_type: row.degree_type,
          college: row.college,
          major: row.major,
          native_place: row.native_place,
          school_name: row.school_name,
          school_zone: row.school_zone,
          entrance_date: row.entrance_date
        }
        this.info = row
        this.dialogInfo = true
        this.edit = true
      },
      handleSaveEdit (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let time = this.studentForm.entrance_date.split('-')
            let myDate = new Date()
            if ((Number(myDate.getFullYear()) - Number(time[0])) > 5) {
              this.$message.error('入学日期必须5年内')
            } else {
              this.loading = true
              postEnrollRecordMember(this.studentForm).then((res) => {
                this.edit = false
                this.dialogInfo = false
                this.getData()
              }).catch(() => {
                this.loading = false
              })
            }
          }
        })
      },
      handleExport () {
        window.open('/admin/activity_enroll_record/export_excel?activity_id=' + this.id)
      },
      handleStatus (row) {
        this.loading = true
        postRecordCheck({record_id: row.record_id}).then((res) => {
          this.getData()
        }).catch(() => {
          this.loading = false
        })
      },
      handleDelete (row) {
        this.$confirm('确定删除该报名信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.loading = true
          postRecordDelete({record_id: row.record_id}).then((res) => {
            this.getData()
          }).catch(() => {
            this.loading = false
          })
        })
      },
      handleQrcode () {
        window.open(this.qrCode)
      },
      handleKey (name) {
        for (let item in this.school) {
          if (this.school[item] === name) {
            return item
          }
        }
      },
      handleRow (row) {
        this.dialogInfo = true
        this.info = row
      },
      getData () {
        getPojectView({id: this.id}).then((res) => {
          this.loading = false
          const info = res.data.info
          let list = res.data.teams.teams
          if (res.data.teams.length === 0) {
            this.list = ''
          }
          for (let item in list) {
            this.list[item] = []
            this.list[item].push(list[item])
            for (let index in list[item].team_member) {
              // list[item].team_member[index]['team_name'] = list[item].team_name
              this.list[item].push(list[item].team_member[index])
            }
          }

          this.contestNo = info.contest_no
          this.school = res.data.school
          this.levelList = res.data.level
          this.school_zone = res.data.school_zone
          this.form['name'] = info.name
          this.form['level'] = info.level
          this.form['description'] = info.description
          this.form['peoples'] = info.peoples
          this.form['school_info'] = info.school_info
          this.form['tag'] = info.tag_name
          this.form['brand'] = info.brand
          this.form['start_time'] = info.start_time
          this.form['end_time'] = info.end_time
          this.form['sign_up_required'] = info.sign_up_required
          this.form['score_rule'] = info.score_rule
          this.form['prize_setting'] = info.prize_setting

          this.form['pr_start_time'] = info.registration.pr_start_time
          this.form['pr_end_time'] = info.registration.pr_end_time
          this.form['stall_start_time'] = info.registration.stall_start_time
          this.form['stall_end_time'] = info.registration.stall_end_time
          this.form['check_building_start_time'] = info.registration.check_building_start_time
          this.form['check_building_end_time'] = info.registration.check_building_end_time
          this.form['society_participants'] = info.registration.society_participants
          this.form['stall_site'] = info.registration.stall_site

          this.form['tp_start_time'] = info.training.tp_start_time
          this.form['tp_end_time'] = info.training.tp_end_time
          this.form['training_site'] = info.training.training_site
          this.form['tr_participants'] = info.training.tr_participants
          this.form['lector'] = info.training.lector
          this.form['tp_is_exist_media'] = info.training.tp_is_exist_media

          this.form['fap_start_time'] = info.award.fap_start_time
          this.form['fap_end_time'] = info.award.fap_end_time
          this.form['finals_site'] = info.award.finals_site
          this.form['teams_num'] = info.award.teams_num
          this.form['judge'] = info.award.judge
          this.form['fap_is_exist_media'] = info.award.fap_is_exist_media

          this.qrCode = info.qr_url
          this.links = res.page_resource
        }).catch(() => {
          this.loading = false
        })
      },
      handleClose () {
        this.dialogInfo = false
        this.edit = false
      }
    },
    data () {
      const checkPhone = (rule, value, callback) => {
        const regPhone = /^1[23456789]\d{9}$/
        if (value === '') {
          return callback(new Error('请填写手机号码'))
        }
        if (!regPhone.test(value)) {
          return callback(new Error('请填写正确的手机号码'))
        }
        return callback()
      }
      const checkEmail = (rule, value, callback) => {
        const regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        if (value === '') {
          return callback(new Error('请填写邮箱'))
        }
        if (!regEmail.test(value)) {
          return callback(new Error('请填写正确的邮箱'))
        }
        return callback()
      }
      const checkIdo = (rule, value, callback) => {
        const regIdo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        if (value === '') {
          return callback(new Error('请填写身份证'))
        }
        if (!regIdo.test(value)) {
          return callback(new Error('请填写正确的身份证'))
        }
        return callback()
      }
      return {
        id: '',
        loading: false,
        dialogTeam: false,
        dialogInfo: false,
        active: 'info',
        rules: {},
        levelList: {},
        team: {},
        qrCode: '',
        list: {},
        leader: '',
        edit: false,
        form: {
          // 基础信息
          name: '',
          level: '',
          description: '',
          peoples: '',
          school_info: [],
          brand: '',
          tag: '',
          start_time: '',
          end_time: '',
          sign_up_required: '',
          score_rule: '',
          prize_setting: '',
          // 宣传报名期相关数据
          pr_start_time: '',
          pr_end_time: '',
          stall_start_time: '',
          stall_end_time: '',
          check_building_start_time: '',
          check_building_end_time: '',
          society_participants: '',
          stall_site: '',
          // 培训动员期相关数据
          tp_start_time: '',
          tp_end_time: '',
          training_site: '',
          tr_participants: '',
          lector: '',
          tp_is_exist_media: '2',
          // 决赛颁奖期信息
          fap_start_time: '',
          fap_end_time: '',
          finals_site: '',
          teams_num: '',
          judge: '',
          fap_is_exist_media: '2'
        },
        school: [],
        school_zone: [],
        tag: [],
        contestNo: '',
        links: {},
        info: {},
        studentForm: {
          // 学生信息
          name: '',
          sex: '',
          phone: '',
          email: '',
          identify_number: '',
          blood_type: '',
          degree_type: '',
          college: '',
          major: '',
          native_place: '',
          school_name: '',
          school_zone: '',
          entrance_date: ''
        },
        studentRules: {
          name: [
            { required: true, message: '请填写姓名', trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          identify_number: [
            { validator: checkIdo, trigger: 'blur' }
          ],
          school_name: [
            { required: true, message: '请选择学校', trigger: 'change' }
          ],
          school_zone: [
            { required: true, message: '请选择校区', trigger: 'change' }
          ],
          college: [
            { required: true, message: '请填写学院', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '请选择专业', trigger: 'blur' }
          ],
          degree_type: [
            { required: true, message: '请选择毕业学历', trigger: 'change' }
          ],
          entrance_date: [
            { required: true, message: '请选择入学时间', trigger: 'change' }
          ],
          native_place: [
            { required: true, message: '请填写籍贯', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>
<style  lang="postcss">
.hx-projectEdit{
  &_header{
    position: relative;
    margin-bottom: 20px;
    &-text{
      color: #333333;
      font-size: 14px;
      position: relative;
      margin-left: 90px;
      z-index: 2;
      background-color: #fff;
      display: inline-block;
      padding: 0 15px;
    }
    &-line{
      height: 1px;
      content: '';
      width: 100%;
      left: 0;
      top: 12px;
      display: block;
      background-color: #e6e6e6;
      z-index: 1;
      position: absolute;
    }
  }
  &_title{
    background-color: #d7d7d7;
    padding: 15px 0 15px 40px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  &_info{
    margin-bottom: 30px;
    .el-input__inner{
      width: 210px;
    }
    .el-form-item{
      margin-bottom: 0;
    }
  }
  &_tab{
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
    &-row{
      margin-right: 40px;
      padding: 15px 10px;
    }
    &-active{
      color: #496397;
      border-bottom: 1px solid #496397;
    }
  }
  &_table{
    margin-bottom: 20px;
  }
  &_text{
    font-size: 12px;
    padding: 4px 0 4px 40px;
    margin-bottom: 20px;
    background-color: #f2f2f2;
  }
  &_content{
    input{
      width: 220px;
    }
  }
  &_checkbox{
    .el-form-item__content{
      margin-left: 40px!important;
    }
  }
  &_button{
    margin-top: 60px;
    text-align: center;
    button{
      width: 120px;
    }
  }
  &_qrcode{
    text-align: center;
  }
  &_img{
    img{
      width: 140px;
      height: 140px;
    }
    &-button{
      a{
        color: #fff;
      }
    }
  }
  &_radio{
    display: block;
    margin-bottom: 20px;
  }
  .el-input.is-disabled .el-input__inner, .el-textarea.is-disabled .el-textarea__inner{
    border-color: #e4e7ed;
    /* background-color: #fff; */
    color: #333333; 
  }
  .el-form-item.is-success .el-input__inner, 
  .el-form-item.is-success .el-input__inner:focus, 
  .el-form-item.is-success .el-textarea__inner, 
  .el-form-item.is-success .el-textarea__inner:focus{
    border: 1px solid #dcdfe6;
  }
}
</style>
